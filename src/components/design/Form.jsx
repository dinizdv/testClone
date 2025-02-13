import Section from '../Section'
import Heading from '../Heading'

const Form = () => {
  return (
    <Section id="trabalhe-conosco">
        <Heading
          title="Trabalhe Conosco"
          className='!px-5'
        />

    <form  className="max-w-sm mx-auto space-y-4 p-6 bg-white rounded-lg shadow-md">
      {/* Name Input */}
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-gray-900">Nome</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          
          required 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>

      {/* Phone Number */}
      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium text-gray-900">Celular</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-900">E-mail</label>
        <input 
          type="email" 
          id="email" 
          name="email"
          required 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>

      {/* CV Upload */}
      <div className="space-y-2">
        <label htmlFor="" className="text-sm font-medium text-gray-900">Anexar currículo</label>
        <input 
          type="file" 
          id="cv" 
          name="cv"
          accept=".pdf,.doc,.docx"
          required
          className="border border-gray-300 block w-full text-sm text-gray-500 file:bg-white file:border-0 file:text-gray-700 file:font-normal file:p-2.5 file:focus:ring-blue-500 file:focus:border-blue-500 rounded-lg"
        />
      </div>

      {/* Submit Button */}
      <button 
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
      >
        Enviar dados
      </button>
    </form>
    </Section>

  )
}

export default Form