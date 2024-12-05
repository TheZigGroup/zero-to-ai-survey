'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

export function ReportAccessForm() {
  const [reportId, setReportId] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportId.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter a report confirmation code',
        variant: 'destructive',
      });
      return;
    }
    
    // TODO: Implement report access logic
    toast({
      title: 'Accessing Report',
      description: 'This feature is coming soon!',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto mt-12 bg-white/30 p-10 rounded-md backdrop-blur-sm border border-gray-200 relative">
      <div className="flex flex-col space-y-4">
        <h2 className="text-xl text-center text-gray-700">
          To Access a previous report, Enter your report confirmation code:
        </h2>
        <div className="flex gap-4 border rounded-md">
          <Input
            value={reportId}
            onChange={(e) => setReportId(e.target.value)}
            placeholder="e.g., GWEN-564312341-ZTAI"
            className="flex-1 text-lg py-6 border-0"
          />
          <Button type="submit" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 mt-1 mr-1">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}