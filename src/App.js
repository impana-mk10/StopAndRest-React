import "./App.css";
import Home from "./components/home/Home";
import Footer from "./components/layout/Footer";
import AddRoom from "./components/room/AddRoom";
import EditRoom from "./components/room/EditRoom";
import ExistingRooms from "./components/room/ExistingRooms";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoomListing from "./components/room/RoomListing";
import PropertyDashboard from "./components/PropertyManagement/PropertyDashboard";
import Checkout from "./components/bookings/Checkout";
import BookingSuccess from "./components/bookings/BookingSuccess";
import BookingSummary from "./components/bookings/BookingSummary";
import BookingForm from "./components/bookings/BookingForm";
import AvailableBookings from "./components/bookings/AvailableBookings";
import FindBooking from "./components/bookings/FindBooking";
import UserLogin from "./components/Authentication/UserLogin";
import UserRegister from "./components/Authentication/UserRegister";
import Profile from "./components/Authentication/Profile";
import Logout from "./components/Authentication/Logout";
import { AuthProvider } from "./components/Authentication/AuthProvider";
import RequireAuth from "./components/Authentication/RequireAuth";
import OwnerLogin from "./components/Authentication/OwnerLogin";
import OwnerRegistration from "./components/Authentication/OwnerRegistration";
import OwnerProfile from "./components/Authentication/OwnerProfile";
import { OwnerAuthProvider } from "./components/Authentication/OwnerAuthProvider";
import AboutUs from "./components/common/aboutUs";



function App() {
  return (
    <AuthProvider>
      <OwnerAuthProvider>
        <main>
          <Router>
             
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<AboutUs/>}/>
              <Route path="/edit-room/:roomId" element={<EditRoom />} />
              <Route
                path="/existing-rooms"
                element={
                  <RequireAuth forOwner={true}>
                    <ExistingRooms />
                  </RequireAuth>
                }
              />
             
              <Route
                path="/add-newRoom"
                element={
                  <RequireAuth forOwner={true}>
                    <AddRoom />
                  </RequireAuth>
                }
              />
              <Route path="/browse-all-rooms" element={<RoomListing />} />
              <Route path="/list-properties" element={<PropertyDashboard />} />
              <Route path="/owner-login" element={<OwnerLogin />} />
              <Route path="/details/:roomId" element={<Checkout />} />
              <Route
                path="/booking-success"
                element={
                  <RequireAuth forUser={true}>
                    <BookingSuccess />
                  </RequireAuth>
                }
              />
              <Route
                path="/booking-summary"
                element={
                  <RequireAuth forUser={true}>
                    <BookingSummary />
                  </RequireAuth>
                }
              />
              <Route
                path="/book-room/:roomId"
                element={
                  <RequireAuth forUser={true}>
                    <BookingForm />
                  </RequireAuth>
                }
              />
              <Route
                path="/existing-bookings"
                element={
                  <RequireAuth forOwner={true}>
                    <AvailableBookings />
                  </RequireAuth>
                }
              />
              <Route
                path="/find-booking"
                element={
                  <RequireAuth forUser={true}>
                    <FindBooking />
                  </RequireAuth>
                }
              />
              <Route path="/user-login" element={<UserLogin />} />
              <Route path="/user-registration" element={<UserRegister />} />
              <Route
                path="/profile"
                element={
                  <RequireAuth forUser={true}>
                    <Profile />
                  </RequireAuth>
                }
              />
              <Route
                path="/logout"
                element={
                  <RequireAuth forUser={true}>
                    <Logout />
                  </RequireAuth>
                }
              />
              <Route
                path="/owner-registration"
                element={<OwnerRegistration />}
              />
              <Route
                path="/owner-profile"
                element={
                  <RequireAuth forOwner={true}>
                    <OwnerProfile />
                  </RequireAuth>
                }
              />
            </Routes>
          </Router>
          <Footer />
        </main>
      </OwnerAuthProvider>
    </AuthProvider>
  );
}

export default App;
