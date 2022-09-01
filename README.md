# ReactJs

## Components

terdapat 2 jenis untuk membuat components pada reactJS. Pertama memakai Stateless Compoents, dan kedua memakai Statefull Compoents

#### Stateless Components

```
function HelloComponents() {
  return <p>Function Compoents</p>;
}

const HelloComponent = () => {
  // ES6
  return <p>Gello Function Compoents</p>;
};
```

#### Statefull Components

```
class StatefullCompoents extends React.Component {
  render() {
    // memanggil paling pertama
    return <p>Statefull Compoents</p>;
  }
}
```

## Props

Props berfungsi membuat components menjadi bisa diubah-ubah / menjadi dinamis.
DefaultProps berfungsi untuk membuat default value pada props. Jika tidak ada maka props kosong

#### Components

```
const YoutubeComp = (props) => {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img
          src={props.img}
          alt="youtube"
        />
        <p className="time">{props.time}</p>
      </div>
      <p className="title">{props.title}</p>
      <p className="desc">desc here</p>
    </div>
  );
};

YoutubeComp.defaultProps = {
  time: "7.12",
  title: "Youtube",
};
```

#### Render

```
<YoutubeComp title="lagi" time="7.12" />
```

## State

State berfungsi untuk ketika berubah maka akan merender ulang diganti dengan state yang telah berubah

```
state = {
  order: 4,
  name: "vino",
};

<div className="count">{this.state.order}</div>
```

#### perbedaan components

Pada arrow components bersifat global artinya state bisa terbaca dimana saja, sementara pada components standart bersifat non-global atau hanya membaca pada bagian dalam komponents tersebut

```
handlePlus = () => { // bisa langsung ke global
  this.setState({
    order: this.state.order + 1,
  });
};

handleMinus() { // hanya fokus ke method
  this.setState({
    order: this.state.order - 1,
  });
}
```

#### Pemanggilan Props

```
// Parent
<Components
  valueOrder={this.state.order}
/>

// Components
this.props.valueOrder;
```

## LifeCycle Compoents

![App Screenshot](https://miro.medium.com/proxy/0*2Y__6_3e2eiN8h6A)

- Mounting 👉 ketika komponent di pasang
- updating 👉 Ketika komponent di update
- unmounting 👉 ketika komponent di hapus

#### Component Basic

Pertama memanggil `render()` adalah method basic, termasuk dalam **LifeCycle**

```
export default class LifeCycleComp extends Component {
  render() {
    return <div>LifeCycleComp</div>;
  }
}
```

```
// Mounting
constructor(props) {}
static getDerivedFromProps(props, state) {}
componentDidMount() {}

// updating
shouldComponentUpdate(nextProps, nextState) {}
getSnapshotBeforeUpdate(prevProps, prevState){}
componentDidUpdate(prevProps, prevState, snapshot) {}

// unmounting
componentWillUnmount(){}

render(){}
```

tidak semua component biasa digunakan, biasanya hanya menggunakan :
![App Screenshot](https://www.tomnysontech.com/content/images/2022/01/image-9.png)
selain diatas digunakan untuk memaksimalkan components yang ada. contoh kasus :

- `shouldComponentUpdate` 👉 jika click button maka baru terupdate. bisa menghentikan jika memiliki function.

#### Mounting / pemasangan

▶️ constructor ➡️ getDerivedFromProps ➡️ render ➡️ componentDidMount 🚫

- `constructor` 👉 default dari ES6.
- `getDerivedFromProps` 👉 Menagkap value props.
- `render` 👉 merender props yang ada.
- `componentDidMount` 👉 menandakan Compoents selesai di Mounting. || bisa melakukan perintah untuk update.

```
  constructor(props) {
    super(props); // super harus ditambahkan jika "extends Component"
    this.state = {
      count: 1,
    };
  }

  static getDerivedFromProps(props, state) {
    return null;
  }

  componentDidMount() {}

  render() {
    return <button>LifeCycle {this.state.count}</button>;
  }
```

#### Updating / diupdate

▶️ constructor (1) ➡️ getDerivedFromProps ➡️ render<1 /> ➡️ componentDidMount
➡️ getDerivedFromProps ➡️ shouldComponentUpdate ➡️ render <2 />
➡️ getSnapshotBeforeUpdate ➡️ componentDidUpdate 🚫

- `getDerivedFromProps` 👉 Menagkap apakah ada perubahan di value props.
- `shouldComponentUpdate` 👉 component yang sangat berguna untuk meningkatkan performa dari sebuah web dimana bisa menjegah update dari sebuah komponents. jika tidak ada retun true maka komponents berhenti.
- `render` 👉 merender props yang ada.
- `getSnapshotBeforeUpdate` 👉 Mengchapture nilai prop sebelumnya dengan nilai props sebelumnya.
- `componentDidUpdate` 👉 Menandakan Compoents telah selesai diupdate.

```
  constructor(props) {
    super(props); // super harus ditambahkan jika "extends Component"
    this.state = {
      count: 1,
    };
  }

  static getDerivedFromProps(props, state) {
    return null;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        count: 2,
      });
    }, 3000);
  }

  // updating
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {}

  render() {
    return <button>LifeCycle {this.state.count}</button>;
  }
```

#### Unmounting / dihapus

`componentWillUnmount` Menandakan component di hapus

▶️ constructor (1) ➡️ getDerivedFromProps ➡️ render<button /> ➡️ timeout 15sec ➡️ componentWillUnmount 🚫

- page home

```
  state = {
    showComp: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showComp: false,
      });
    }, 15000);
  }

render () {
  return {this.state.showComp ? <LifeCycleComp /> : null}
}
```

- page button

```
 constructor(props) {
    super(props); // super harus ditambahkan jika "extends Component"
    this.state = {
      count: 1,
    };
  }

  static getDerivedFromProps(props, state) {
    return null;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        count: 2,
      });
    }, 3000);
  }

  // updating
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {}

  render() {
    return <button>LifeCycle {this.state.count}</button>;
  }
```
