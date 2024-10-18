import { Card } from "@/components/ui/card";
import React from "react";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

interface SocialPlatform {
  name: string;
  icon: React.ElementType;
  connected: boolean;
  username?: string;
}

const socialPlatforms: SocialPlatform[] = [
  { name: "Instagram", icon: AiFillInstagram, connected: false },
  { name: "TikTok", icon: AiFillTikTok, connected: false },
  { name: "Youtube", icon: FaYoutube, connected: false },
  {
    name: "X (formerly Twitter)",
    icon: FaSquareXTwitter,
    connected: true,
    username: "creator@X.com",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    connected: true,
    username: "creator@facebook.com",
  },
];

const SocialAccounts = () => {
  return (
    <>
      <h1 className="text-lg md:text-3xl text-[#5F6062] font-bold mb-5">
        Social Accounts
      </h1>
      <Card className="mb-20 flex p-4">
        <div className="bg-white p-4 w-full space-y-6">
          {socialPlatforms.map((platform) => (
            <div
              key={platform.name}
              className="flex items-center justify-between p-3 border rounded-lg"
            >
              <div className="flex items-center">
                <div className=" p-2 rounded-lg mr-3">
                  <platform.icon
                    className="w-10 h-10"
                    style={{ color: "#143701" }}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {platform.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {platform.connected ? platform.username : "Not Connected"}
                  </p>
                </div>
              </div>
              <button
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  platform.connected
                    ? "text-gray-400 hover:bg-gray-100"
                    : "text-green-500  hover:bg-green-100"
                }`}
              >
                {platform.connected ? "Disconnect" : "Connect"}
              </button>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
};

export default SocialAccounts;
