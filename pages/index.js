import Head from 'next/head'
import Image from 'next/image'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import Link from 'next/link'



export default function Home() { 
  return (
    <Wrapper>
      <Map/>
      <ActionItem>
        {/* Header */}
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"/>
          <Profile>
            <Name>
              Rahul Mishra
            </Name>
            <UserImg src='https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80'/>
          </Profile>
        </Header>
        {/* ActionButton */}
        <ActionButtons>
          <Link href='/search'>
           <ActionButton>
              <ActionButtonImage src='https://i.ibb.co/cyvcpfF/uberx.png'/>
              Ride
            </ActionButton>
          </Link>
         
          <ActionButton>
           <ActionButtonImage src='https://i.ibb.co/n776JLm/bike.png'/>
            Wheels
          </ActionButton>
          <ActionButton>
           <ActionButtonImage src='https://i.ibb.co/5RjchBg/uberschedule.png'/>
            Reserve
          </ActionButton>

        </ActionButtons>
        {/* InputButton */}
        <InputButton>
                  Where to
        </InputButton>
      </ActionItem>
    </Wrapper>
  )
}

const Wrapper = tw.div`
   flex flex-col h-screen
`

const ActionItem=tw.div`
 flex-1 p-4
`
const Header=tw.div`
flex justify-between items-center
`
const UberLogo=tw.img`
h-28`

const Profile=tw.div`
flex items-center 
`
const Name=tw.div`
mr-4 w-20 text-sm
`

const UserImg=tw.img`
h-12 w-12 rounded-full border-gray-200 p-px
`
const ActionButtons=tw.div`
  flex 
`
const ActionButton=tw.div`
  bg-gray-200 flex flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg
  transform hover:scale-105 transition text-xl
`
const ActionButtonImage=tw.img`
 h-3/5
`
const InputButton=tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`