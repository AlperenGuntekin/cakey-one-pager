import "./App.css";
import "./components/Roadmap.css"
import travel_01 from "./assets/travel-01.jpg";
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


function App() {
  const navbarLinks = [
    { url: "#", title: "Home" },
    { url: "#", title: "Trips" },
    { url: "#", title: "Rewards" },
  ];

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={travel_01} />
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
      <Slider
        imageSrc={travel_01}
        title={"Roadmap"}
        subtitle={"İş arayanların bekleyerek zaman kaybetmesini istemiyoruz. Bu yüzden YAPAY ZEKA İLE ÖZGEÇMİŞ İNCELEME özelliğimiz de platformda yakın zamanda kullanılır halde olacak."}

      />
        <Slider
        imageSrc={profileData}    
        title={"Ekip"}
        subtitle={
          "İş arama sürecinin ne kadar sancılı bir dönem olduğunun farkındayız. Bu yüzden fiyatlarımızı herkesin yararlanabileceği şekilde tutuyoruz."
        }
        flipped={true}
      />
      <DarkVariantExample />
    </div>
  );
}

export default App;
