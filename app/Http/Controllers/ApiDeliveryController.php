<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App;

class ApiDeliveryController extends Controller
{
    public function index()
    {
        $settigs = App\ApiSettigs::all();
        return view('api/apiSettings', compact('settigs'));
    }
}
