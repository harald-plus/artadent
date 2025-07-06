import { redirect } from 'next/navigation';

export default function AdminPage() {
  // Redirect to the actual TinaCMS admin interface
  redirect('/admin/index.html');
}