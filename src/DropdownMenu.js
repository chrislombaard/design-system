import { Card } from './index'

const DropdownMenu = Card.extend.attrs({
  id: 'dropdownMenu',
  'aria-labelledby': 'dropdownButton'
})`
  height: 200px;
  overflow: scroll;
  -webkit-overflow-scrolling: scroll;
`

DropdownMenu.displayName = 'DropdownMenu'

export default DropdownMenu
