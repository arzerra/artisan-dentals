"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import LogoutButton from "../components/LogoutButton";

export default function AdminPage() {
  const router = useRouter();
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.replace("/login");
      } else {
        setUser(user);
      }
      setLoading(false);
    };

    checkUser();
  }, [router]);

  if (loading) return null;

  return (
    <>
    
    <div className="flex justify-between p-4">
      <div className="flex">Welcome</div>
      <div className="flex"><LogoutButton /></div>
    </div>

    <div className="flex flex-col justify-center items-center">
      <h1>Add New Patient</h1>
      <div className="flex flex-col items-start justify-center">
        <div className="mt-5">
          <label>Name: </label>
          <input type="text" placeholder="Patient's Name..."/>
        </div>
        <div className="mt-5">
          <label>Contact Number: </label>
          <input type="tel" placeholder="Patient's Name..."/>
        </div>
        <div className="mt-5">
          <label>Birthday: </label>
          <input type="text" placeholder="Patient's Name..."/>
        </div>
        <div className="mt-5">
          <label>Gender: </label>
          <input type="text" placeholder="Patient's Name..."/>
        </div>
      </div>
        <button className="flex cursor-pointer items-center justify-center p-5">Add</button>
    </div>
    
    </>
  );
}
