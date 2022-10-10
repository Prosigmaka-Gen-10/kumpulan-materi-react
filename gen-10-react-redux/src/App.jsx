import store from "./store"

export default function App () {
  function tampilkanStore () {
    console.log(store.getState())
  }

  function handleUbahNama () {
    store.dispatch({
      type: 'ubahNama',
      value: 'bambang'
    })
  }

  return <>
    <h1>hai dunia!</h1>
    <button onClick={tampilkanStore}>tampilkan isi store</button>
    <br />
    <button onClick={handleUbahNama}>ubah nama</button>
  </>
}