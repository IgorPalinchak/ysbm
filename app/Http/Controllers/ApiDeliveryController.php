<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App;
use Validator;
use Illuminate\Support\Facades\Lang;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;
use App\ApiSettigs;


class ApiDeliveryController extends Controller
{

    public function __construct(Client $client, ApiSettigs $settigs)
    {
        $this->guzzleClient = $client;
        $this->settigs = $settigs;
    }


    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        if (!empty($this->settigs->all()->toArray()) && session('api_auth_token')) {
            $settigsData = $this->settigs->all()->toArray()['0'];
            $authToken = session('api_auth_token');
            return view('api/settings', compact(['settigsData', 'authToken']));
        } else {
            $settigsData = false;
            return view('api/settings', compact('settigsData'));
        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function getToken(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'inputEmail' => 'required|email',
            'inputPassword' => 'required|min:3'
        ]);
        if ($validator->fails()) {
            return view('api.errors', ['errors' => $validator->getMessageBag()->toArray()]);
        } else {
            $api_url = config('app.ysbm_api_url');

            try {
                $response = $this->guzzleClient->post($api_url . 'login', [
                    'headers' => [
                        'Accept' => 'application/json',
                        'Content-Type' => 'application/json'
                    ],
                    'json' => [
                        'email' => $request->inputEmail,
                        'password' => $request->inputPassword,
                    ]
                ]);
                if ($response->getStatusCode() == '200') {
                    $output = $response->getBody()->getContents();
                    $output = (array)json_decode($output);
                    $token = $output['data']['0']->token;

                    $existinLoginData = $this->settigs->all()->firstWhere('login', 'like', $request->inputEmail);

                    if($existinLoginData == null){
                        $this->settigs->login = $request->inputEmail;
                        $this->settigs->password = $request->inputPassword;
                        $this->settigs->token_data = $token;
                        $this->settigs->saveOrFail();
                    }else{
//                        dd($existinLoginData->update($request->all()));
                        $existinLoginData->offsetSet('token_data',
                            $token);

                    }

                    session(['api_auth_token' => $token]);
                    return view('api.success', ['success' => Lang::get('api_messages.token_reseived', ['auth_token' => $token])]);
                }

            } catch (GuzzleException $e) {
                return view('api.errors', ['errors' => [[Lang::get('api_messages.guzle_access_error') . $e->getCode()]]]);
            }
        }
    }


}
