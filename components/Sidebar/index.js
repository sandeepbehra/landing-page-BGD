"use client";

export default function SidebarComponent({
  sidebar,
  setSidebar
}) {
  return (
    <div className="absolute w-screen h-screen top-[4rem] md:left-[80%] right-0 left[46%] lg:hidden block z-50 bg-background text-heading">
      <Sidebar aria-label="Default sidebar example" className="w-full">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {navbarData.map((data) => (
              <Link to={data.name.toLowerCase()} smooth={true}>
                <Sidebar.Item className="cursor-pointer" onClick={() => setSidebar(false)}>
                  {data.name}
                </Sidebar.Item>
              </Link>
            ))}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
