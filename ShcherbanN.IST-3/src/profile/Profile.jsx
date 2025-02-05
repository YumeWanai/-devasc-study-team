import * as React from "react";
import { ProfileInput } from "./ProfileInput";
import { SaveButton } from "./SaveButton";

function ProfileSettings() {
  return (
    <div className="flex flex-col justify-center items-center  text-base w-full h-full">
      <form className="flex overflow-hidden flex-col px-7 py-8 w-96 max-w-full bg-white rounded-lg shadow-sm max-md:px-5">
        <h1 className="self-start text-2xl font-bold leading-none text-center text-black">
          Profile Settings
        </h1>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/32e1252b541ab8a4d3f07833c83791b0ee0787a8349ca6d5332d49c782f000d7?placeholderIfAbsent=true&apiKey=9c0ba2d1b51c47abaa8a69a9b551f7da"
          alt="Profile settings header"
          className="object-contain mt-6 w-full aspect-[3.08]"
        />
        <ProfileInput
          label="Name"
          id="nameInput"
          type="text"
          placeholder="Enter your name"
        />
        <ProfileInput
          label="Profile Picture"
          id="profilePicInput"
          type="file"
          accept="image/*"
        />
        <SaveButton />
      </form>
    </div>
  );
}

export default ProfileSettings;
