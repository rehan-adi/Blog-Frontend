import axios from "axios";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { BACKEND_API_URL } from "../constant";

export const useGetUsersProfile = () => {

    const { id } = useParams();
    const [userProfileData, setUserProfileData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsersProfile = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${BACKEND_API_URL}/profile/users/${id}`);

                if (response.status === 200) {
                    setUserProfileData(response.data.profile);
                }
            } catch (error) {
                console.error("Error fetching user's profile:", error);
                const message = error.response?.data?.message || "Error fetching user profile data";
                toast.error("Failed to fetch Profile", message);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchUsersProfile();
        }
    }, [id]);

    return { userProfileData, loading };
};
