import { Card } from "@/components/ui/card";
import React from "react";
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

interface SocialPlatform {
  name: string;
  icon: React.ElementType;
  connected: boolean;
  username?: string;
}

const socialPlatforms: SocialPlatform[] = [
  { name: "Instagram", icon: FaInstagram, connected: false },
  { name: "TikTok", icon: FaTiktok, connected: false },
  { name: "Youtube", icon: FaYoutube, connected: false },
  {
    name: "X (formerly Twitter)",
    icon: FaTwitter,
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
      <h1 className="text-lg md:text-2xl text-black mb-5">Social Accounts</h1>
      <Card className="mb-20 flex p-4">
        <div className="bg-white p-4 w-full space-y-6">
          {socialPlatforms.map((platform) => (
            <div
              key={platform.name}
              className="flex items-center justify-between p-3 border rounded-lg"
            >
              <div className="flex items-center">
                <div className="bg-gray-100 p-2 rounded-lg mr-3">
                  <platform.icon className="w-6 h-6 text-gray-700" />
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
                    ? "text-gray-600 hover:bg-gray-100"
                    : "text-green-600 bg-green-50 hover:bg-green-100"
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
