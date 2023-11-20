import { ClerkProvider } from "@clerk/nextjs";

const AuthLayout = ({ children }) => {
    return (
        
            <div className="flex items-center justify-center h-full w-full">
                {children}
            </div>
        
    );
};

export default AuthLayout;
