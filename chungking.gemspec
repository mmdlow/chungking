# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "chungking"
  spec.version       = "0.1.0"
  spec.authors       = ["mmdlow"]
  spec.email         = ["mmdlow@gmail.com"]

  spec.summary       = "An elegant, functional Jekyll theme."
  spec.homepage      = "https://www.google.com"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.0"

  spec.add_development_dependency "bundler"
  spec.add_development_dependency "rake", "~> 12.0"
end
