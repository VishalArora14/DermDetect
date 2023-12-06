import React, { useState } from 'react';
import './search.css';

const diseasesData = [
  {
    name: 'Psoriasis',
    subtypes: [
      {
        id: 1,
        name: 'Plaque Psoriasis',
        image: 'plaque_pso.JPEG',
        description: 'The most common type of psoriasis, plaque psoriasis causes dry, itchy, raised skin patches (plaques) covered with scales. There may be few or many. They usually appear on the elbows, knees, lower back and scalp. The patches vary in color, depending on skin color. The affected skin might heal with temporary changes in color (post inflammatory hyperpigmentation), particularly on brown or Black skin...',
        moreInfo: 'https://www.mayoclinic.org/diseases-conditions/psoriasis/symptoms-causes/syc-20355840#:~:text=Plaque%20psoriasis.,color%2C%20depending%20on%20skin%20color.',
      },
      {
        id: 2,
        name: 'Nail Psoriasis',
        image: 'nail_pso.jpg',
        description: 'Most people develop nail psoriasis years after psoriasis begins. It’s also possible to have nail psoriasis without signs of psoriasis on your skin...',
        moreInfo: 'https://www.aad.org/public/diseases/psoriasis/treatment/genitals/nails',
      },
      {
        id: 3,
        name: 'Guttate Psoriasis',
        image: 'Guttate_pso.JPEG',
        description: 'Guttate psoriasis is a skin disease that often appears without warning and usually follows an infection like strep throat. It’s most common in young adults but can also happen in adults. The hallmark symptom of this condition is breaking out in small, red scaly patches...',
        moreInfo: 'https://my.clevelandclinic.org/health/diseases/22812-guttate-psoriasis',
      },
    ],
  },
  // Add more disease data 
];

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredDiseases = diseasesData.filter((disease) =>
    disease.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    disease.subtypes.some((subtype) =>
      subtype.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="search-page">
      <h1 className="page-title">Skin Disease Information</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search diseases..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <button>Search</button>
      </div>

      {filteredDiseases.map((disease) => (
        <div key={disease.name} className="disease-section">
          <h2 className="disease-heading">{disease.name}</h2>
          <div className="subtypes-container">
            {disease.subtypes.map((subtype) => (
              <div key={subtype.id} className="subtype-card">
                <img src={subtype.image} alt={subtype.name} className="subtype-image" />
                <div className="subtype-info">
                  <h3>{subtype.name}</h3>
                  <p>{subtype.description}</p>
                  <a className='readmore-btn' href={subtype.moreInfo}>Read more....</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchPage;
