import { Button, Label, TextInput } from "flowbite-react";
import React from "react";

const BookingModal = ({ setModalOn, setChoice, user, product }) => {
  const handleOKClick = () => {
    setChoice(true);
    setModalOn(false);
  };
  //   const handleCancelClick = () => {
  //     setChoice(false);
  //     setModalOn(false);
  //   };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const userName = form.userName.value;
    const phone = form.phone.value;
    const location = form.meetLocation.value;

    const booking = {
      name,
      price,
      userName,
      phone,
      location,
      email: user.email,
    };
    console.log(booking);
    fetch("http://localhost:1000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" bg-gray-300 p-10 rounded-2xl h-[35rem] items-center my-5 justify-center fixed inset-0 z-50 lg:w-96 sm:w-full mx-auto  ">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Product Name" />
          </div>
          <TextInput
            id="name"
            name="name"
            type="text"
            defaultValue={product.name}
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Asking Price" />
          </div>
          <TextInput
            id="price"
            name="price"
            type="text"
            defaultValue={product.APrice}
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="User Name" />
          </div>
          <TextInput
            id="userName"
            type="text"
            name="userName"
            defaultValue={user?.displayName}
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your Phone Number" />
          </div>
          <TextInput
            id="phone"
            name="phone"
            type="text"
            placeholder="+880********"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Place to meet" />
          </div>
          <TextInput
            id="meet"
            name="meetLocation"
            type="text"
            placeholder="Location to meet"
            required={true}
          />
        </div>

        <div className="flex w-10 mx-auto my-5">
          <div className="mx-2">
            <Button onClick={handleOKClick} type="submit">
              Close
            </Button>
          </div>
          <div className="mx-2">
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingModal;
