import { Button } from "antd";

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <div className='flex gap-4'>
        <Button type='primary'>Antd Button</Button>
        <Button type='default'>Antd Button</Button>
      </div>
    </main>
  );
}
