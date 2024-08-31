import Sidebar from "./Sidebar"

const Layout = ({ children }: { children: React.ReactNode }) => {

	return (
		<div className='flex'>
			<Sidebar />
			{children}
		</div>
	)
}

export default Layout