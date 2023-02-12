import { ModalAlert } from '../../Components/Modal/ModalAlert'
import * as Style from './style'
import { useRef, useState } from 'react'
import { ModalConfirm } from '../../Components/Modal/ModalConfirm'
import { ModalPrompt } from '../../Components/Modal/ModalPrompt'
import * as StyleBase from '../../Styles/ModalStyle'
import { CompInputCamp } from '../../Components/InputCamp'

export const PageHome = () => {
	const [text, set_text] = useState<string>('')
	const [text2, set_text2] = useState<string>('')

	return (
		<Style.Container>
			<CompInputCamp
				inputText={text}
				set_inputText={set_text}
				labelText={'set an description'}
			/>

			<CompInputCamp
				inputText={text2}
				set_inputText={set_text2}
				labelText={'set an role'}
			/>
		</Style.Container>
	)
}