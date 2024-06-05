import { createBooking, getShedLocations } from '@/services';
import React, { useEffect, useState } from 'react';

function Form({ fuel }: any) {
  const [shedLocations, setShedLocations] = useState<any>([]);
  const [formValue, setFormValue] = useState({
    location: '',
    bookTime: '',
    bookDate: '',
    contactNumber: '',
  });

  useEffect(() => {
    getShedLocations_();
  }, []);

  const getShedLocations_ = async () => {
    const resp: any = await getShedLocations();
    console.log(resp);
    setShedLocations(resp?.shedLocations);
  };

  const handleChange = (event: any) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    console.log(formValue);
    const resp = await createBooking(formValue);
    console.log(resp);
  };

  return (
    <div>
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-1000">Shed Location </label>
        <select
          className="select select-secondary w-full max-w-xs bg-white"
          name="location"
          onChange={handleChange}
          value={formValue.location}
        >
          <option value="" disabled>
            Select a Shed
          </option>
          {shedLocations &&
            shedLocations.map((loc: any, index: number) => (
              <option key={index} value={loc.adress}>
                {loc?.adress}
              </option>
            ))}
        </select>
      </div>

      <div className="flex flex-col w-full mb-5">
        <div className="flex flex-col w-full">
          <label className="text-gray-1000">Fuel Booking Time</label>
          <input
            type="time"
            placeholder="Type here"
            name="bookTime"
            onChange={handleChange}
            className="input input-bordered input-secondary w-full max-w-xs bg-white"
          />
        </div>
        <div className="flex flex-col w-full mb-5">
          <div className="flex flex-col w-full">
            <label className="text-gray-1000">Fuel Booking Date</label>
            <input
              type="date"
              placeholder="Type here"
              name="bookDate"
              onChange={handleChange}
              className="input input-bordered input-secondary w-full max-w-xs bg-white"
            />
          </div>
          <div className="flex flex-col w-full mb-5">
            <div className="flex flex-col w-full">
              <label className="text-gray-1000">Contact Number</label>
              <input
                type="text"
                placeholder="Type here"
                name="contactNumber"
                onChange={handleChange}
                className="input input-bordered input-secondary w-full max-w-xs bg-white "
              />
            </div>
          </div>
        </div>
      </div>

      <button className="btn bg-blue-700 text-white" onClick={handleSubmit}>
        Book
      </button>
    </div>
  );
}

export default Form;
