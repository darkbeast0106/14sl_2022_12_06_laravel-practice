@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h4>{{ $person->name }}</h4>
            </div>
            <div class="card-body">
                <table class="table table-hover table-striped">
                    <tbody>
                        <tr>
                            <th>E-mail</th>
                            <td>{{ $person->email }}</td>
                        </tr>
                        <tr>
                            <th>Lakcím</th>
                            <td>{{ $person->address }}</td>
                        </tr>
                        <tr>
                            <th>Telefonszám</th>
                            <td>{{ $person->phone_number }}</td>
                        </tr>
                        <tr>
                            <th>Születési dátum</th>
                            <td>{{ str_replace('-', '. ', $person->birth_date) . '.' }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="card-footer">
                <a href="{{ route('people.edit', $person->id) }}" class="btn btn-outline-secondary">Módosítás</a>
                @include('people.delete-button', ['person' => $person])
            </div>
        </div>
    </div>
@endsection
