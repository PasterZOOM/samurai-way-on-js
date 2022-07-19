import {create} from 'react-test-renderer'
import {ProfileStatus} from './ProfileStatus'

describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status={'It-kamasutra.com'}/>)
        const instance = component.getInstance()
        expect(instance.state.status).toBe('It-kamasutra.com')
    })

    test('after creation <span> with status should be displayed with correct status', async () => {
        const component = create(<ProfileStatus status={'It-kamasutra.com'}/>)
        const root = component.root
        const span = await root.findByType('span')
        expect(span).not.toBeNull()
    })
    test(`after creation <input> status shouldn't be displayed`, () => {
        const component = create(<ProfileStatus status={'It-kamasutra.com'}/>)
        const root = component.root
        expect(() => {
            return root.findByType('input')
        }).toThrow()
    })

    test('after creation <span> with status text should be \'It-kamasutra.com\'', async () => {
        const component = create(<ProfileStatus status={'It-kamasutra.com'}/>)
        const root = component.root
        const span = await root.findByType('span')
        expect(span.children[0]).toBe('It-kamasutra.com')
    })

    test(`input should be displayed in editMode instead of span`, async () => {
        const component = create(<ProfileStatus status={'It-kamasutra.com'}/>)
        const root = component.root
        const span = await root.findByType('span')
        span.props.onDoubleClick()
        const input = await root.findByType('input')
        expect(input.props.value).toBe('It-kamasutra.com')
    })

    test(`callback should be called`, async () => {
        const mockCallback  = jest.fn()
        const component = create(<ProfileStatus status={'It-kamasutra.com'} updateStatus={mockCallback}/>)
        const instance = component.getInstance()
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})