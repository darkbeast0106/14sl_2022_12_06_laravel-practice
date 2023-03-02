@extends('layouts.app')

@section('content')
    <div id="peopleList">
        <div class="container">
            <div class="card">
                <div class="card-header">
                    <h4>Emberek</h4>
                </div>
                <div class="card-body">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Név</th>
                                <th>E-mail</th>
                                <th>Telefonszám</th>
                                <th>Műveletek</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($people as $person)
                                <tr>
                                    <td>{{ $person->id }}</td>
                                    <td>{{ $person->name }}</td>
                                    <td>{{ $person->email }}</td>
                                    <td>{{ $person->phone_number }}</td>
                                    <td>
                                        <a href="{{ route('people.show', $person->id) }}"
                                            class="btn btn-outline-secondary">Részletek</a>
                                        <a href="{{ route('people.edit', $person->id) }}"
                                            class="btn btn-outline-secondary">Módosítás</a>
                                        @include('people.delete-button', ['person' => $person])
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection
