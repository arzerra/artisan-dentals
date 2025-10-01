"use client";
import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import LogoutButton from "../components/LogoutButton";
import AddPatient from "../components/AddPatient";

export default function AdminPage() {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useState<User | null>(null);
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
    <AddPatient/>
    </>
  );
}
