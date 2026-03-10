import { useState, useEffect } from "react"
import data from "../../public/data.json"
import Navbar from "../components/navbar"
import { MapPin } from "lucide-react"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"

export default function Profile() {
  const [userFName, setUserFName] = useState("")
  const [userAge, setUserAge] = useState(0)
  const [userGender, setUserGender] = useState("")
  const [userLocation, setUserLocation] = useState("")
  const [userBio, setUserBio] = useState("")
  const [userInterests, setUserInterests] = useState<string[]>([])
  const [userLookingFor, setUserLookingFor] = useState("")
  const [userHeight, setUserHeight] = useState(0)
  const [userEducation, setUserEducation] = useState("")
  const [userSmoking, setUserSmoking] = useState(false)
  const [userDrinking, setUserDrinking] = useState("")
  const [userProfilePicture, setUserProfilePicture] = useState("")
  const [userActive, setUserActive] = useState(false)

  useEffect(() => {
    const user = data.users[1]
    if (user) {
      setUserFName(user.firstName)
      setUserAge(user.age)
      setUserGender(user.gender)
      setUserLocation(user.location)
      setUserBio(user.bio)
      setUserInterests(user.interests)
      setUserLookingFor(user.lookingFor)
      setUserHeight(user.heightCm)
      setUserEducation(user.education)
      setUserSmoking(user.smoking)
      setUserDrinking(user.drinking)
      setUserProfilePicture(user.profilePicture)
      setUserActive(user.active)
    }
  }, [])

  const capitalizeWords = (str: string) => {
    return str
      .toLowerCase() // Ensure all letters are lowercase first
      .split(' ') // Split the string into an array of words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
      .join(' '); // Join the words back into a single string
  };

  return (
    <>
      <Navbar/>
      <div id="container" className="flex gap-5 p-4 md:px-20 flex-col md:flex-row">
        <Card className="p-5 border w-full rounded">
          <img src={userProfilePicture} alt="Profile" className="rounded w-full md:max-w-[80%]"/>
          <div className="flex mt-4 items-center gap-2">
            <h2 className="text-2xl font-bold">{userFName}, {userAge}</h2>
            {userActive ? <div className="online">🟢</div> : ""}
          </div>
        </Card>
        <Card className="w-full border p-5 rounded">
          <h1 className="font-bold text-2xl">{userFName}, {userAge}</h1>
          <h3 className="flex gap-2"><MapPin strokeWidth={2}/> {userLocation}</h3>
          <hr className="my-4"/>
          <h2 className="font-bold text-lg">About Me</h2>
          <p>{userBio}</p>
          <h2 className="font-bold text-lg">Looking For</h2>
          <p>{userLookingFor}</p>
          <h2 className="font-bold text-lg">Interests</h2>
          <div id="interests" className="flex gap-2 flex-wrap">{userInterests.map(i => <li className="bg-gray-600/25 px-4 py-1 list-none rounded-2xl" key={i}>{i}</li>)}</div>
          <h2 className="font-bold text-lg">At a Glance</h2>
          <div className="glance flex gap-2 flex-wrap">
            <div className="bg-gray-600/25 px-4 py-1 rounded">
              <p>Gender:</p>
              <p>{userGender}</p>
            </div>
            <div className="bg-gray-600/25 px-4 py-1 rounded">
              <p>Height:</p>
              <p>{userHeight} cm</p>
            </div>
            <div className="bg-gray-600/25 px-4 py-1 rounded">
              <p>Education:</p>
              <p>{userEducation}</p>
            </div>
            <div className="bg-gray-600/25 px-4 py-1 rounded">
              <p>Smoking:</p>
              <p>{userSmoking ? "Smokes" : "Non-smoker"}</p>
            </div>
            <div className="bg-gray-600/25 px-4 py-1 rounded">
              <p>Drinking:</p>
              <p>{capitalizeWords(userDrinking)}</p>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}