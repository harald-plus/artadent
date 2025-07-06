import { redirect } from 'next/navigation';

export default function AdminPage() {
  // In production, TinaCMS handles this route automatically
  // This is just a fallback for development
  redirect('/');
}