import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';

export default function Home() {
  return (
    <Card className="w-full">
      <CardContent>
        <div className="flex flex-row items-center justify-between gap-4">
          <h1 className="text-lg w-max">I&nbsp;SCREAM&nbsp;U&nbsp;SCREAM</h1>

          <div className="relative w-full">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input className="w-full pl-10" type="text" placeholder="Search..." />
          </div>

          <Button variant="neutral">Login</Button>
          <Button>Sign&nbsp;Up</Button>
        </div>
      </CardContent>
    </Card>
  );
}
