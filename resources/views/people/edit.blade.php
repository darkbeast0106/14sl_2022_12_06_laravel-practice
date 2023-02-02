@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h4>{{ $person->name }} módosítása</h4>
            </div>
            <div class="card-body">
                @if ($errors->any())
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        @foreach ($errors->all() as $error)
                            {{ $error }} <br>
                        @endforeach
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                @endif

                <form action={{ route('people.update', $person->id) }} method="post">
                    @method('PUT')
                    @csrf
                    <div class="mb-3">
                        <label for="name" class="form-label">Név:</label>
                        <input type="text" id="name" name="name" placeholder="Név"
                            value="{{ old('name') ? old('name') : $person->name }}" @class([
                                'form-control',
                                'is-invalid' => array_key_exists('name', $errors->messages()),
                            ])>
                        @error('name')
                            <div class="invalid-feedback">
                                {{ $message }}
                            </div>
                        @enderror

                    </div>

                    <div class="mb-3">
                        <label for="email" class="form-label">E-mail:</label>
                        <input type="email" id="email" name="email" placeholder="E-mail"
                            value="{{ old('email') ? old('email') : $person->email }}" @class([
                                'form-control',
                                'is-invalid' => array_key_exists('email', $errors->messages()),
                            ])>
                        @error('email')
                            <div class="invalid-feedback">
                                {{ $message }}
                            </div>
                        @enderror
                    </div>

                    <div class="mb-3">
                        <label for="address" class="form-label">Lakcím:</label>
                        <input type="text" id="address" name="address" placeholder="Lakcím"
                            value="{{ old('address') ? old('address') : $person->address }}" @class([
                                'form-control',
                                'is-invalid' => array_key_exists('address', $errors->messages()),
                            ])>
                        @error('address')
                            <div class="invalid-feedback">
                                {{ $message }}
                            </div>
                        @enderror
                    </div>

                    <div class="mb-3">
                        <label for="phone_number" class="form-label">Telefonszám:</label>
                        <input type="tel" id="phone_number" name="phone_number" class="form-control"
                            placeholder="Telefonszám"
                            value="{{ old('phone_number') ? old('phone_number') : $person->phone_number }}"
                            @class([
                                'form-control',
                                'is-invalid' => array_key_exists('phone_number', $errors->messages()),
                            ])>
                        @error('phone_number')
                            <div class="invalid-feedback">
                                {{ $message }}
                            </div>
                        @enderror
                    </div>

                    <div class="mb-3">
                        <label for="birth_date" class="form-label">Születési dátum:</label>
                        <input type="date" id="birth_date" name="birth_date" placeholder="Születési dátum"
                            value="{{ old('birth_date') ? old('birth_date') : $person->birth_date }}"
                            @class([
                                'form-control',
                                'is-invalid' => array_key_exists('birth_date', $errors->messages()),
                            ])>
                        @error('birth_date')
                            <div class="invalid-feedback">
                                {{ $message }}
                            </div>
                        @enderror
                    </div>

                    <button type="submit" class="btn btn-secondary">Módosítás</button>
                </form>
            </div>
        </div>

    </div>
@endsection
