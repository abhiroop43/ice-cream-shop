import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import Image from 'next/image';
import logo from '@/public/images/logo.svg';
import { CategorySelector } from '@/components/category-selector';

export const Header = () => {
  return (
    <Card className="w-full">
      <CardContent>
        <div className="flex flex-row items-center justify-between gap-4">
          {/* <h1 className="text-md w-max">I&nbsp;SCREAM U&nbsp;SCREAM</h1> */}
          <header>
            <Image src={logo} alt="I&nbsp;SCREAM U&nbsp;SCREAM" width={200} height={80} />
            {/* ... other header content ... */}
          </header>

          <div className="relative w-full">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input className="w-full pl-10" type="text" placeholder="Search..." />
          </div>

          <Button variant="neutral">Login</Button>
          <Button>Sign&nbsp;Up</Button>
        </div>
        <CategorySelector />
      </CardContent>
    </Card>
  );
};
