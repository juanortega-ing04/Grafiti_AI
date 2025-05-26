// src/pages/Gallery.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/colors.css';

const data = [
  {
    id: 1,
    image: 'https://scontent.fclo17-1.fna.fbcdn.net/v/t1.6435-9/78435208_2371190693197331_1609881221465112576_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=xenbx6qhGf4Q7kNvwFHfstU&_nc_oc=AdmRNWtg6RZ6QPLPa1Il5CiO4JfwRZWkBbkHIsTK_N0fenTE-k0PZ9GidMb4Lxwce44&_nc_zt=23&_nc_ht=scontent.fclo17-1.fna&_nc_gid=HpF8LeIgj7gyEazjPpyPoQ&oh=00_AfLPhK7dtcekE0pHxXOTBWZU6QI6VJY7x9ZU9nttWZsc4w&oe=685C1D99',
    title: 'Guardián del Volcán Galeras de la cosmogonía Obonuco',
    artist: 'Sebastián Bucheli',
  },
  {
    id: 2,
    image: 'https://s3.amazonaws.com/rtvc-assets-misenal.tv/ms-public/inline-images/Grafiti3_MuralReconciliacio%CC%81n.jpeg',
    title: 'Mural de la reconciliación',
    artist: 'ARK y Chirrete Golden',
  },
  {
    id: 3,
    image: 'https://s3.amazonaws.com/rtvc-assets-misenal.tv/ms-public/inline-images/Grafiti_laCandelaria2_Traveler.jpeg',
    title: 'Kuna Tule',
    artist: 'Carlos Trilleras',
  },
  {
    id: 4,
    image: 'https://s3.amazonaws.com/rtvc-assets-misenal.tv/ms-public/inline-images/Grafiti1_Publimetro.jpeg',
    title: 'Distrito Graffiti',
    artist: 'Vértigo Graffiti',
  },
];

const Gallery = () => {

  return (
    <div className="container">
      <h1 className="mb-4">Galería de Arte</h1>
      <p>En esta galería encontrarás una selección de grafitis emblemáticos de Colombia, reflejo vivo de nuestra cultura y arte urbano. 
        Estas expresiones artísticas, creadas con dedicación por artistas callejeros, capturan ideas, emociones, 
        momentos y eventos históricos que forman parte de nuestra identidad. 
        Es fundamental valorar, promover y preservar este arte que aporta voz y color a nuestras calles.</p>
      <div className="row">
        {data.map(({ id, image, title, artist }) => (
          <div key={id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={image} className="card-img-top" alt={title} style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{title}</h5>
                <p className="card-text text-muted mb-3">{artist}</p>
              </div> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

