import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-[#D8315B]" />
            <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            We couldn't find the page you were looking for.
          </p>
          
          <div className="mt-6">
            <Link href="/">
              <a className="inline-flex items-center text-[#3E92CC] hover:text-[#0A2463] font-medium">
                Return to Home
              </a>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
