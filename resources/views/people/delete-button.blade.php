<form action="{{ route('people.destroy', $person->id) }}" method="POST" style="display: inline;">
    @method('DELETE')
    @csrf
    <button type="submit" class="btn btn-outline-secondary">Törlés</button>
</form>
