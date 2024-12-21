import React, { useState, useRef } from 'react';
import '../styles/search-bar.css';
import { Col, Form, FormGroup } from 'reactstrap';

const SearchBar = () => {
  // State for dynamic price range
  const [priceRange, setPriceRange] = useState([0, 1000]); // Default range from 0 to 1000
  const [tourType, setTourType] = useState(''); // Tour Type (Beach, Adventure, etc.)
  
  // Form input refs
  const locationRef = useRef('');
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);

  const searchHandler = () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    // Ensure all fields are filled before searching
    if (location === '' || distance === '' || maxGroupSize === '') {
      return alert('Please fill all fields');
    }

    // Log the search criteria (to handle backend request, etc.)
    console.log(location, distance, maxGroupSize, priceRange, tourType);
  };

  // Handle price range change
  const handlePriceRangeChange = (e) => {
    const newPriceRange = [...priceRange];
    newPriceRange[e.target.name === 'min' ? 0 : 1] = e.target.value;
    setPriceRange(newPriceRange);
  };

  // Handle tour type change
  const handleTourTypeChange = (e) => {
    setTourType(e.target.value);
  };

  return (
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
          {/* Location Field */}
          <FormGroup className="form__group form__group-fast">
            <span><i className="ri-map-pin-line"></i></span>
            <div>
              <h6>Location</h6>
              <input
                type="text"
                placeholder="Where are you going?"
                ref={locationRef}
              />
            </div>
          </FormGroup>

          {/* Distance Field */}
          <FormGroup className="form__group form__group-fast">
            <span><i className="ri-map-pin-time-line"></i></span>
            <div>
              <h6>Distance</h6>
              <input
                type="number"
                placeholder="Distance (km)"
                ref={distanceRef}
              />
            </div>
          </FormGroup>

          {/* Max People Field */}
          <FormGroup className="form__group form__group-fast">
            <span><i className="ri-group-line"></i></span>
            <div>
              <h6>Max People</h6>
              <input
                type="number"
                placeholder="0"
                ref={maxGroupSizeRef}
              />
            </div>
          </FormGroup>

          {/* Price Range Field */}
          <FormGroup className="form__group">
            <span><i className="ri-money-dollar-circle-line"></i></span>
            <div>
              <h6>Price Range</h6>
              <input
                type="range"
                min="0"
                max="1000"
                step="50"
                value={priceRange[0]}
                name="min"
                onChange={handlePriceRangeChange}
              />
              <input
                type="range"
                min="0"
                max="1000"
                step="50"
                value={priceRange[1]}
                name="max"
                onChange={handlePriceRangeChange}
              />
              <div className="price-range-text">
                ${priceRange[0]} - ${priceRange[1]}
              </div>
            </div>
          </FormGroup>

          {/* Tour Type Dropdown */}
          <FormGroup className="form__group">
            <span><i className="ri-map-pin-time-line"></i></span>
            <div>
              <h6>Tour Type</h6>
              <select
                value={tourType}
                onChange={handleTourTypeChange}
                className="tour-type-dropdown"
              >
                <option value="">Select Type</option>
                <option value="Beach">Beach</option>
                <option value="Adventure">Adventure</option>
                <option value="City">City</option>
                <option value="Cultural">Cultural</option>
                <option value="Nature">Nature</option>
              </select>
            </div>
          </FormGroup>

          {/* Search Button Icon */}
          <span className="search__icon" type="submit" onClick={searchHandler}>
            <i className="ri-search-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
