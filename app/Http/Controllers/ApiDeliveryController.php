<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App;
use Validator;
use Illuminate\Support\Facades\Lang;


class ApiDeliveryController extends Controller
{
    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $settigs = App\ApiSettigs::all();
        session(['api_auth_token' => false]);
        if (!empty($settigs->toArray()) && session('api_auth_token')) {
            $settigs_data = $settigs->toArray()['0'];
            $auth_token = session('api_auth_token');
            return view('api/settings', compact(['settigs_data', 'auth_token']));
        } else {
            $settigs_data = false;
            return view('api/settings', compact('settigs_data'));
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
//        User::create($request->all());
//        return response()->json(['success' => 'Все успешно добавлено. Вы будите перенаправлены!'], 200);
            $token = 'oshdsuifgsdfsdytfuysdfklsduyfgsf';
            return view('api.success', ['success' => Lang::get('api_messages.token_reseived', ['auth_token' => $token])]);
        }
    }


}
