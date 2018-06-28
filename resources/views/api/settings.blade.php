@extends('main')

@section('content')
    @if ($settigs_data)
        <div class="jumbotron">
            <h1>@lang('api_messages.welcome')</h1>
            <p class="lead">@lang('api_messages.token_string', ['auth_token'=>$auth_token])</p>
        </div>
    @else
        <div id="successMessage"></div>
        <div class="row">
            <div class="col-md-offset-3 col-md-6">
                <form class="form-horizontal" id="form" action="apiDelGetToken" method="post">
                    @csrf
                    <span class="heading">@lang('api_messages.api_auth_data')</span>
                    <div class="form-group">
                        <input type="email" class="form-control" id="inputEmail" name="inputEmail" placeholder="E-mail" required>
                        <i class="fa fa-user"></i>
                    </div>
                    <div class="form-group help">
                        <input type="password" class="form-control" id="inputPassword" name="inputPassword" placeholder="Password" required>
                        <i class="fa fa-lock"></i>
                        <a href="#" class="fa fa-question-circle"></a>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-default">@lang('api_messages.enter')</button>
                    </div>
                </form>
            </div>
        </div><!-- /.row -->
        <br>
        <br>
    @endif
@endsection

@section('footer')

@endsection