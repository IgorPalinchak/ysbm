@if (count($errors)>0)
    <div class="alert alert-danger">
        <ul>
            @foreach($errors as $error)
                @foreach($error as $one_error)
                    <li>
                        {{$one_error}}
                    </li>
                    @endforeach
            @endforeach
        </ul>
    </div>
@endif
