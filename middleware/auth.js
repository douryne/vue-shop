export default function ({ store, redirect }) {
  if (store.state.auth.dataForm === null) {
    return redirect('/login')
  }
}
