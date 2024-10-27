import { useContext } from "react";
import { AuthContext } from "../context";

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error('useAuthContext debe ser usado dentro de un AuthProvider');
    }

    return context;
};