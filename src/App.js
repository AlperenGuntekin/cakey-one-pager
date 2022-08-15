import "./App.css";
import "./components/Roadmap.css"
import background from "./assets/background.png";
import profileData from "./assets/profile-data.svg";
import yesno from "./assets/yes-no.svg";
import solving from "./assets/solving.svg";
import ai from "./assets/artificial-intelligence.svg";
import diff from "./assets/different.svg";
import happy from "./assets/happy.svg";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import DarkVariantExample from "./components/Roadmap";
import Card from "./components/Card";



function App() {

  return (
    
    <div className="App">
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a 
        className="navbar-brand" 
        href="#">
        <img 
        style={{ width: "9rem" }}
        src="cakey-logo.png">
        </img>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="text-right" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active text-black" aria-current="page" href="#cakey">Cakey</a>
            <a className="nav-link text-black" href="#problem">Problem</a>
            <a className="nav-link text-black" href="#cozum">Çözüm</a>
            <a className="nav-link text-black" href="#yapayzeka">Yapay Zeka</a>
            <a className="nav-link text-black" href="#farkli">Farklı</a>
            <a className="nav-link text-black" href="#fiyat">Fiyat</a>
            <a className="nav-link text-black" href="#roadmap">Roadmap</a>
            <a className="nav-link text-black" href="#ekip">Ekip</a>
          </div>
        </div>
      </div>
    </nav>
      <Hero imageSrc={background} />
      <a name="cakey" id="cakey" class="intlink">&nbsp;</a>
      <Slider
        name="cakey"
        imageSrc={profileData}    
        title={"Cakey size kariyerin anahtarını sunuyor!"}
        subtitle={
          "Uzun ve başarısız iş arama süreçlerine artık elveda. Cakey kariyer adımlarını senin için şekillendiriyor!"
        }
        subtitle2
      />
      <a name="problem" id="problem" class="intlink">&nbsp;</a>
      <Slider
        id="problem"
        imageSrc={yesno}
        title={"Problem"}
        subtitle={"İş arayanların kendi özgeçmişlerini hazırlamakta ve başvuru süreçlerinde sorun yaşadıklarını farkettik."}
        flipped={true}
      />
      <a name="cozum" id="cozum" class="intlink">&nbsp;</a>
      <Slider
        id="cozum"
        imageSrc={solving}    
        title={"Çözüm"}
        subtitle={
          "İş arayanların mevcut mülakat performanslarını ve güncel öz geçmişlerini güçlendirerek tecrübelerini arttırmak ve bilinçli iş arama süreci geçirmelerini sağlıyoruz."
        }
      />
      <a name="yapayzeka" id="yapayzeka" class="intlink">&nbsp;</a>
      <Slider
        id="yapayzeka"
        imageSrc={ai}
        title={"Yapay Zeka Desteği"}
        subtitle={"İş arayanların bekleyerek zaman kaybetmesini istemiyoruz. Bu yüzden YAPAY ZEKA İLE ÖZGEÇMİŞ İNCELEME özelliğimiz de platformda yakın zamanda kullanılır halde olacak."}
        flipped={true}
      />
      <a name="farkli" id="farkli" class="intlink">&nbsp;</a>
      <Slider
        id="farkli"
        imageSrc={diff}    
        title={"Farklıyız"}
        subtitle={
          "Günümüz girişimleri şirketleri düşünürken biz sizi düşünüyoruz. Doğru işi doğru zamanda bulmanız için elimizden gelenin en iyisini yapıyoruz."
        }
      />
      <a name="fiyat" id="fiyat" class="intlink">&nbsp;</a>
      <Slider
        id="fiyat"
        imageSrc={happy}    
        title={"Uygun Fiyat"}
        subtitle={
          "İş arama sürecinin ne kadar sancılı bir dönem olduğunun farkındayız. Bu yüzden fiyatlarımızı herkesin yararlanabileceği şekilde tutuyoruz."
        }
        flipped={true}
      />
      <a name="roadmap" id="roadmap" class="intlink">&nbsp;</a>
      <DarkVariantExample
        id="roadmap"
      />
      <div className="row justify-content-center">
      <h1 className="row justify-content-center" >Ekibimiz</h1>
      <div className="col-9 d-sm-flex p-1">
      <a name="ekip" id="ekip" className="intlink">&nbsp;</a>
      <Card
        id="ekip"
      />
      </div>
      </div>
    </div>
  );
}

export default App;
