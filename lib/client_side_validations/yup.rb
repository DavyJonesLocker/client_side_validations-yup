# frozen_string_literal: true

require 'client_side_validations'
require 'client_side_validations/yup/form_builder'

if defined?(::Rails)
  require 'client_side_validations/yup/engine'
  require 'client_side_validations/generators/yup'
end
