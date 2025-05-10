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

          <div className="flex items-center border-2 border-black p-0 rounded-base w-full xlg:w-3/5 gap-2 bg-white">
            <SearchIcon className="h-8 w-8" />
            <Input className="w-full border-0" type="text" />
          </div>

          <Button variant="neutral">Login</Button>
          <Button>Sign&nbsp;Up</Button>
        </div>
      </CardContent>
    </Card>
  );
}
