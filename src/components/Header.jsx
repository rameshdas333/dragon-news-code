import { format} from "date-fns";
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center pt-12 pb-5'>
                <img className="w-[370px] " src={logo} alt="" />
                <p className='text-red-500'>Journalism Without Fear or Favour</p>
                <p>Sunday, November 27, 2025</p>
                <p>{format(new Date(),"EEEE, MMMM MM, yyyy")}</p>
            </div>
        </div>
    );
};

export default Header;