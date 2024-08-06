import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Paw } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">All About Dogs</h1>
        
        <img 
          src="https://images.unsplash.com/photo-1517849845537-4d257902454a" 
          alt="Cute dog" 
          className="mx-auto object-cover w-full h-[400px] rounded-lg mb-8"
        />

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Paw className="mr-2" /> What are Dogs?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Dogs are domesticated mammals, part of the wolf family. They've been bred for thousands of years for various purposes, including companionship, hunting, herding, and protection. Known for their loyalty and affection, dogs are often referred to as "man's best friend."
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Paw className="mr-2" /> Characteristics of Dogs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6">
              <li>Loyal and affectionate</li>
              <li>Highly intelligent and trainable</li>
              <li>Come in various sizes, shapes, and colors</li>
              <li>Have an excellent sense of smell and hearing</li>
              <li>Social animals that form strong bonds with humans</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Paw className="mr-2" /> Popular Dog Breeds
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6">
              <li>Labrador Retriever</li>
              <li>German Shepherd</li>
              <li>Golden Retriever</li>
              <li>French Bulldog</li>
              <li>Beagle</li>
              <li>Poodle</li>
              <li>Rottweiler</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
