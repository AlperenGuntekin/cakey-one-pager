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
  const navbarLinks = [
    { url: "#", title: "Problem" },
    { url: "#", title: "Çözüm" },
    { url: "#", title: "Yapay Zeka" },
    { url: "#", title: "Farklıyız" },
    { url: "#", title: "Fiyat" },
    { url: "#", title: "Roadmap" },
    { url: "#", title: "Ekip" },
  ];

  return (
    
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={background} />
      <Slider
        imageSrc={profileData}    
        title={"Cakey size kariyerin anahtarını sunuyor!"}
        subtitle={
          "Uzun ve başarısız iş arama süreçlerine artık elveda. Cakey kariyer adımlarını senin için şekillendiriyor!"
        }
        subtitle2
      />
      <Slider
        imageSrc={yesno}
        title={"Problem"}
        subtitle={"İş arayanların kendi özgeçmişlerini hazırlamakta ve başvuru süreçlerinde sorun yaşadıklarını farkettik."}
        flipped={true}
      />
      <Slider
        imageSrc={solving}    
        title={"Çözüm"}
        subtitle={
          "İş arayanların mevcut mülakat performanslarını ve güncel öz geçmişlerini güçlendirerek tecrübelerini arttırmak ve bilinçli iş arama süreci geçirmelerini sağlıyoruz."
        }
      />
      <Slider
        imageSrc={ai}
        title={"Yapay Zeka Desteği"}
        subtitle={"İş arayanların bekleyerek zaman kaybetmesini istemiyoruz. Bu yüzden YAPAY ZEKA İLE ÖZGEÇMİŞ İNCELEME özelliğimiz de platformda yakın zamanda kullanılır halde olacak."}
        flipped={true}
      />
      <Slider
        imageSrc={diff}    
        title={"Farklıyız"}
        subtitle={
          "Günümüz girişimleri şirketleri düşünürken biz sizi düşünüyoruz. Doğru işi doğru zamanda bulmanız için elimizden gelenin en iyisini yapıyoruz."
        }
      />
      <Slider
        imageSrc={happy}    
        title={"Uygun Fiyat"}
        subtitle={
          "İş arama sürecinin ne kadar sancılı bir dönem olduğunun farkındayız. Bu yüzden fiyatlarımızı herkesin yararlanabileceği şekilde tutuyoruz."
        }
        flipped={true}
      />
      <DarkVariantExample />
      <div className="row justify-content-center">
      <h1 className="row justify-content-center" >Ekibimiz</h1>
      <div className="col-9 d-sm-flex p-1">
      <Card />
      </div>
      </div>
    </div>
  );
}

export default App;
