<script lang="ts">
    export let values: Record<string, string> = {};
</script>

<form method="POST">
    <input
        class="input input-bordered w-full max-w-xs"
        id="password"
        name="password"
        value={values?.password ?? ""}
        type="password"
        placeholder="Nowe hasło"
        required
        minlength="6"
    />
    <button class="btn">Zatwierdź</button>
</form>
