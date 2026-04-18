import { Button } from "./components/ui/button"
import {Plus, Wand} from "lucide-react"

export const App = () => {
  return (
    <div>
      <h1>Let me ask</h1>
	  <Button size="icon" variant="default"><Plus /></Button>
	  <Button size="icon" ><Wand/></Button>
	  <Button variant="outline">Click me</Button>
	  <Button variant="secondary">Click me</Button>
	  <Button variant="ghost">Click me</Button>
	  <Button size="sm" variant="link">Click me</Button>
    </div>
  )
}


