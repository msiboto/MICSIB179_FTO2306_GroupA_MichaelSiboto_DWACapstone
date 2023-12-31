import { useState } from "react";
import { useNavigate } from "react-router-dom"
import supabase from "../../Config/supabaseClient"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import Divider from "@mui/material/Divider"

const TopNav = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate()

  const backToHome = () => {
    navigate('/')
  }

  const handleDialog = () => {
    setDialogOpen(!dialogOpen);
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  return (
    <nav className="navBar">
      <div className="w-10 h-10 m-5 rounded-full flex items-center justify-center overflow-hidden cursor-pointer" onClick={backToHome}>
        <img
          src="/favicon.png"
          alt="PodCast Logo"
          className="logo--image"
        />
        </div>
      <div className="accountButton">
        <Button onClick={handleDialog}>
          <AccountCircleIcon className="text-xl" />
        </Button>
      </div>
      <Dialog open={dialogOpen} onClose={handleDialog}>
        <div className="w-72 h-44 bg-white dark:bg-black">
          <h3 className="text-lg m-1">Settings</h3>
          <Divider variant="fullWidth" />
          <div className="max-w-full flex flex-col justify-center items-center">
            <Button
              variant="contained"
              sx={{ width: "90%", height: "50px", marginTop: "10px" }}
              onClick={handleLogout}
            >
              Sign Out
            </Button>
            <Button
              variant="contained"
              sx={{ width: "90%", height: "50px", marginTop: "10px" }}
              onClick={handleDialog}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Dialog>
    </nav>
  );
};

export default TopNav;