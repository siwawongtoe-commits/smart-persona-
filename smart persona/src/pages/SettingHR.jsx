import React from "react";
import {
  Settings,
  User,
  Bookmark,
  Bell,
  Info,
  HelpCircle,
  Phone,
  ChevronRight,
  LogOut,
  Trash2,
  Download,
} from "lucide-react";

// --- Reusable Component: Menu Item for the settings list ---
const MenuItem = ({ Icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center justify-between p-4 border-b border-gray-100 hover:bg-blue-50/50 transition-colors w-full rounded-lg"
  >
    <div className="flex items-center space-x-4">
      <Icon className="w-6 h-6 text-blue-700 flex-shrink-0" />
      <span className="text-lg font-medium text-gray-700">{label}</span>
    </div>
    <ChevronRight className="w-5 h-5 text-blue-500" />
  </button>
);

// --- Reusable Component: Profile Summary Card ---
const ProfileSummaryCard = () => (
    <div className="flex items-center space-x-6 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
        {/* User Avatar - Large, round, gradient background with a subtle shadow */}
        <div className="w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-br from-pink-300 to-pink-500 shadow-inner">
            {/* Simple Female User SVG Icon (Matching the new image) */}
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Hair/Head (Darker Pink/Red) */}
                <path d="M12 11c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" fill="#D32F2F" />
                {/* Face/Neck (Light Skin Tone) */}
                <path d="M12 11c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" fill="#FFECB3" transform="translate(0, 1)" />
                {/* Body/Shoulders (Pink/Red suit) */}
                <path d="M3 20c0-3.866 3.582-7 8.5-7S20 16.134 20 20v1H3v-1z" fill="#F48FB1" />
                {/* Blouse/Collar (White) */}
                <rect x="10" y="14" width="4" height="2" fill="#FFFFFF"/>
                {/* Hair Over Shoulders */}
                <path d="M16 8c0 2.21-1.79 4-4 4s-4-1.79-4-4" stroke="#D32F2F" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        </div>

        {/* Name and Email */}
        <div className="flex-1">
            {/* Updated name prefix */}
            <h2 className="text-xl font-bold text-gray-800">Ms. Username Username</h2>
            <p className="text-sm text-gray-500">username@gmail.com</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col space-y-3">
            <button className="flex items-center justify-center bg-blue-600 text-white font-semibold py-2 px-4 rounded-full text-sm shadow-md hover:bg-blue-700 transition-colors w-40">
                Manage Profile
            </button>
            {/* Profile Download button is removed as per the image */}
        </div>
    </div>
);


export default function App() {
  
  return (
    <div className="min-h-screen font-sans antialiased text-gray-700 bg-gray-100">
      
      {/* HTML structure for the Inter font and responsiveness */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        .font-sans {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Header (Dark Blue Background) */}
      <header className="bg-blue-800 text-white p-4 flex items-center justify-between shadow-lg">
        <div className="text-2xl font-extrabold pl-2 tracking-wider">PerFile</div>
        <button className="bg-white text-blue-800 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors shadow-md">
            กลับสู่หน้าข้อมูลบุคลากร
        </button>
      </header>

      {/* Main Content Area - Centered and max-width restricted */}
      <main className="max-w-4xl mx-auto p-8 pt-10">

        {/* Setting Title Section */}
        <div className="flex items-center space-x-4 mb-8">
            <Settings className="w-10 h-10 text-blue-700 bg-blue-100 p-1.5 rounded-full" />
            <h1 className="text-3xl font-bold text-gray-800">Setting</h1>
        </div>

        {/* Profile Summary Card */}
        <ProfileSummaryCard />

        {/* Profile Detail Section (Text Information) */}
        <div className="mt-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Profile Detail</h3>
            <p className="text-gray-600">Joined on October 2025</p>
            <p className="text-gray-600">Phone : 099-xxx-xxxx</p>
        </div>

        {/* Settings Menu List */}
        <div className="space-y-2 bg-white p-4 rounded-xl shadow-md border border-gray-200">
            <MenuItem Icon={Bookmark} label="Saved" onClick={() => console.log("Go to Saved")} />
            <MenuItem Icon={Bell} label="Notification" onClick={() => console.log("Go to Notifications")} />
            <MenuItem Icon={Info} label="About" onClick={() => console.log("Go to About")} />
            <MenuItem Icon={HelpCircle} label="Help Center" onClick={() => console.log("Go to Help Center")} />
            <MenuItem Icon={HelpCircle} label="FAQs" onClick={() => console.log("Go to FAQs")} />
            <MenuItem Icon={Phone} label="Contact us" onClick={() => console.log("Go to Contact us")} />
        </div>

        {/* Action Buttons (Delete and Logout) */}
        <div className="flex justify-center space-x-6 mt-12">
            <button className="flex items-center space-x-2 bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-lg shadow-xl hover:bg-blue-800 transition-colors">
                <Trash2 className="w-6 h-6" />
                <span>Delete Account</span>
            </button>
            <button className="flex items-center space-x-2 bg-red-600 text-white font-semibold py-3 px-6 rounded-lg text-lg shadow-xl hover:bg-red-700 transition-colors">
                <LogOut className="w-6 h-6" />
                <span>Log out</span>
            </button>
        </div>

        {/* Bottom spacing */}
        <div className="h-16" />
      </main>
    </div>
  );
}