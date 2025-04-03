import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LinkedinIcon } from 'lucide-react'; // Import LinkedIn icon

// Team member data
const teamMembers = [
  {
    name: 'Michelle Rockwell',
    title: 'Co-Founder',
    imageUrl: '/images/team/michelle-rockwell.jpg', // Ensure this path is correct
    linkedinUrl: '#', // Placeholder LinkedIn URL
  },
  {
    name: 'Martín Espiño',
    title: 'Co-Founder',
    imageUrl: '/images/team/martin-espino.jpg', // Ensure this path is correct
    linkedinUrl: '#', // Placeholder LinkedIn URL
  },
];

export function Team() {
  return (
    <section id="team" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground dark:text-secondary tracking-tight">
            Meet Our Leadership
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            Experienced partners dedicated to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 justify-items-center max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center">
              <Image
                src={member.imageUrl}
                alt={`Portrait of ${member.name}`}
                width={200} // Adjust size as needed
                height={200} // Adjust size as needed
                className="rounded-full mb-4 object-cover aspect-square"
              />
              <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
              <p className="text-primary font-medium mb-2">{member.title}</p>
              <Link
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 mr-1" />
                LinkedIn
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 