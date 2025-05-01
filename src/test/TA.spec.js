import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import TAPage from '../TAPage.vue'

describe('TAPage.vue', () => {
  it('envía correctamente el mensaje por WhatsApp', async () => {
    const spy = vi.spyOn(window, 'open').mockImplementation(() => {})

    const wrapper = mount(TAPage)

    await wrapper.find('#nombre').setValue('Iván Test')
    await wrapper.find('#telefono').setValue('3704001234')
    await wrapper.find('#motivo').setValue('Consulta general')
    await wrapper.find('#fecha-turno').setValue('2025-07-15')

    await wrapper.find('form').trigger('submit.prevent')

    // 👉 extraemos el mensaje desde la URL encodeada
    const llamada = spy.mock.calls[0][0]
    const mensajeDecodificado = decodeURIComponent(llamada.split('text=')[1])

    expect(mensajeDecodificado).toContain('Iván Test')
    expect(mensajeDecodificado).toContain('3704001234')
    expect(mensajeDecodificado).toContain('Consulta general')
    expect(mensajeDecodificado).toContain('2025-07-15')

    spy.mockRestore()
  })
})
